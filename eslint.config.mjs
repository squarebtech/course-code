export default [
    {
        ignores: ["node_modules/**"],
    },
    {
        files: ["**/*.js"],
        languageOptions: {
            globals: {
                browser: true,
                es2021: true,
                node: true
            },
            ecmaVersion: 2021,
            sourceType: "module"
        },
        rules: {
            // Define your rules here
        },
        plugins: {
            // Define your plugins here if needed
        },
        extends: [
            "eslint:recommended",
            "standard" // Change this to "standard" or "google" if you chose those
        ]
    }
];
