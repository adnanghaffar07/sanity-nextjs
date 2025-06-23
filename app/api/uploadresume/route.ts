import { serverClient } from '@/sanity/lib/sanity/serverClient';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get('file') as File;
    const title = formData.get('title') as string;

    if (!file) {
      return NextResponse.json(
        { success: false, error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // ✅ Upload file directly (no need for buffer conversion)
    const uploadedFile = await serverClient.assets.upload('file', file, {
      filename: file.name,
      contentType: file.type,
    });

    // ✅ Create document referencing uploaded file
    await serverClient.create({
      _type: 'resumeSubmission',
      title,
      file: {
        _type: 'file',
        asset: {
          _type: 'reference',
          _ref: uploadedFile._id,
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to upload resume' },
      { status: 500 }
    );
  }
}
