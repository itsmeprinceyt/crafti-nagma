import { redirect } from 'next/navigation';

export default function Page() {
    redirect(process.env.NEXT_PUBLIC_INSTA_LINK!);
    return null;
}