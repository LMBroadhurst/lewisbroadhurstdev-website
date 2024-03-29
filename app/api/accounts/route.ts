import clientPromise from '@/lib/mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
    try {
        const client = await clientPromise
        const db = client.db('sample_analytics')

        // limited to 100
        const accounts = await db
            .collection('accounts')
            .find({})
            .limit(100)
            .toArray()

        return NextResponse.json(accounts)
    } catch (e) {
        return NextResponse.json(e)
    }
}
