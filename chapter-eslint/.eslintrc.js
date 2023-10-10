module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    // 기본 규칙의 확장
    extends: ["eslint:recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    // 상황 규칙 추가
    rules: {
        "no-extra-semi": "off",
    },
};
