import clientPromise from '../../../../lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    // Need zod to parse the input query
    // const { accountid } = req.query
    const query = {
        account_id: 387877,
    }

    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        const account = await db
            .collection('accounts')
            .findOne(query)
            .then(res => res)

        console.log(account)

        return NextResponse.json(account)
    } catch (e) {
        return NextResponse.json(e)
    }
}
