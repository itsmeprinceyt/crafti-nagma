import { redirect } from 'next/navigation';

export default function Page() {
    redirect(process.env.NEXT_PUBLIC_WAB_LINK!);
    return null;
}