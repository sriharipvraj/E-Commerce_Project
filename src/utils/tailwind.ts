import type { ClassValue } from 'clsx';

import { clsx } from 'clsx';
import { createTailwindMerge, getDefaultConfig, mergeConfigs } from 'tailwind-merge';

const tailwindMerge = createTailwindMerge(getDefaultConfig, config =>
    mergeConfigs(config, {
        extend: {
            classGroups: {
                colors: [
                    'colorname-1',
                    'colorname-2',
                  


                ],

                fontSize: [
                     'font-size-1',
                   	'font-size-1',
                 
                ],
            },
        },
    }),
);

export default function cn(...input: ClassValue[]) {
    return tailwindMerge(clsx(input));
}