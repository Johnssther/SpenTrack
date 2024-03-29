module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          presentation: "./src/presentation",
          components: "./src/presentation/src/components",
        },
      },
    ],
  ],
};
