import { defineConfig } from 'eslint/config';
import { defaultFilePatterns, neostandard } from 'neostandard';

export default defineConfig([
    ...neostandard({ semi: true, env: ['node'] }),
    {
        files: defaultFilePatterns.all,
        rules: {
            '@stylistic/indent': ['error', 4],
            '@stylistic/padded-blocks': 'off',
            '@stylistic/space-before-function-paren': 'off',
        },
    },
]);
