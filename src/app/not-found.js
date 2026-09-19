import Link from 'next/link';
import { ClipButton } from '@/components/ui/buttons';

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center text-center px-4">
            <h1 className="font-caprasimo text-6xl text-primary mb-4">404</h1>
            <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <ClipButton href="/">
                Return Home
            </ClipButton>
        </div>
    );
}
