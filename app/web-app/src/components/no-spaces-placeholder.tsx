'use client';

import { Button } from '@/components/ui/button';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAppKit } from '@reown/appkit/react';

interface NoSpacesPlaceholderProps {
    targetRoute: string;
}

export default function NoSpacesPlaceholder({
    targetRoute,
}: NoSpacesPlaceholderProps) {
    const { open } = useAppKit();
    const { isConnected } = useAccount();
    const router = useRouter();
    const handleCreateSpaceClick = () => {
        if (isConnected) {
            router.push(targetRoute);
        } else {
            open();
        }
    };
    return (
        <div className="flex flex-col items-center justify-center text-center py-12">
            <Image
                src="nodata.svg"
                alt="No spaces found"
                className="w-32 h-32 mb-4"
                width={32}
                height={32}
            />
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                No Spaces Available
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                It looks like there are no active spaces yet. Explore the
                possibilities of starting your own funding space and be a
                pioneer in the community.
            </p>
            <Button onClick={handleCreateSpaceClick}>Start a New Space</Button>
        </div>
    );
}
