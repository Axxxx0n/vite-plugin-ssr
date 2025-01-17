# Contribute to `vite-plugin-ssr`

- [Requirements](#requirements)
- [Ceate new example](#create-new-example)
- [Modify existing example](#modify-existing-example)
- [Modify `vite-plugin-ssr`](#modify-vite-plugin-ssr)
- [Run test suite](#run-test-suite)


## Requirements

These requirements are for *developing* the source code; you can use `vite-plugin-ssr` with Windows and Node.js `>= v12.19.0`.

- Unix (e.g. macOS or Linux). (Windows may work but there are no guarantees.)
- Node.js `>= v15.0.0`.
- Yarn classic globally installed

## Create new example

New examples should be minimal and implement only what the example wants to showcase.
Start off with `/examples/react/` or `/examples/vue/` as these are minimal demos.
(Do not start off `/examples/react-full/` nor `/examples/vue-full/` as these are full-featured demos.)

## Modify existing example

To run an example:

```shell
git clone git@github.com:brillout/vite-plugin-ssr
cd vite-plugin-ssr/examples/some-example/
```

Then run `npm run start` or `npm run dev`, depending on the example.

Note that the examples and boilerplates use npm, while the rest of the repository uses Yarn.

Check whether the tests defined in `.test.spec.ts` are still valid and make changes accordingly.

To run the example's tests:

```shell
cd path/to/vite-plugin-ssr/
yarn test examples/some-example/
```


## Modify `vite-plugin-ssr`

Prepare everything (install, build, and link):

```shell
git clone git@github.com:brillout/vite-plugin-ssr
cd vite-plugin-ssr/
yarn dev:setup
```

Run TypeScript in watch mode:

```shell
yarn dev
```

You can now change the source code of `vite-plugin-ssr` (at `/vite-plugin-ssr/`) and try your modifications with one of the `/examples/*` or `/boilerplates/boilerplate-*`.
To start the example, follow the `README.md` instructions of the example.
You may need to restart the example's Node.js server for your `vite-plugin-ssr` modifications to apply.

Once you're done and before opening a pull request, run the test suite to ensure that your modifications don't break anything.


## Run test suite

Prepare everything (install, build, and link):

```shell
git clone git@github.com:brillout/vite-plugin-ssr
cd vite-plugin-ssr/
yarn test:setup
```

To run all tests:

```shell
yarn test
```

To run only the tests of an example:

```shell
yarn test examples/some-example/
```

