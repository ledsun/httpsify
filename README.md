# script-src-httpsify

A browserify transform to replace `http` of script sources to `https`.

This module enable to replace `http` to `https` when files are copied by  [cpx](https://github.com/mysticatea/cpx).

## Installation

```
npm install script-src-httpsify
```

## Usage

```
cpx bar.html dist -t script-src-httpsify
```
