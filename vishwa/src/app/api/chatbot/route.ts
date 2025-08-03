import { NextRequest, NextResponse } from 'next/server';
import { faqData } from '@/data/faqData';

export async function GET() {
  try {
    // Group FAQs by category for better organization
    const categorizedFAQs = faqData.reduce((acc, faq) => {
      const category = faq.category || 'General';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(faq);
      return acc;
    }, {} as Record<string, typeof faqData>);

    return NextResponse.json(
      {
        success: true,
        data: {
          faqs: faqData,
          categorized: categorizedFAQs,
          categories: Object.keys(categorizedFAQs),
        },
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('FAQ fetch error:', error);
    return NextResponse.json(
      { success: false, message: 'Unable to fetch FAQ data' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { success: false, message: 'Query is required' },
        { status: 400 }
      );
    }

    // Simple search implementation
    const searchQuery = query.toLowerCase();
    const matchingFAQs = faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery) || 
      faq.answer.toLowerCase().includes(searchQuery) ||
      (faq.category && faq.category.toLowerCase().includes(searchQuery))
    );

    return NextResponse.json(
      {
        success: true,
        data: {
          query,
          results: matchingFAQs,
          count: matchingFAQs.length,
        },
      },
      { status: 200 }
    );

  } catch (error: unknown) {
    console.error('FAQ search error:', error);
    return NextResponse.json(
      { success: false, message: 'Search failed' },
      { status: 500 }
    );
  }
}
