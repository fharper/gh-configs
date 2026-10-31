// Same as the built-in header-max-length rule, but ignores the " (#123)" GitHub adds on squash merge
export default {
    rules: {
        'header-max-length': [2, 'always', 72],
    },
    plugins: [
        {
            rules: {
                'header-max-length': (parsed, when = 'always', value = 72) => {
                    const header = (parsed.header || '').replace(/\s\(#[0-9]+\)$/, '');
                    const fits = header.length <= value;
                    return [
                        when === 'never' ? !fits : fits,
                        `header must not be longer than ${value} characters, current length is ${header.length}`,
                    ];
                },
            },
        },
    ],
};
