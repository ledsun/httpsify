# httpsify

A browserify transform to replace `http` of script sources to `https`.

This module enable to replace `http` to `https` when files are copied by  [cpx](https://github.com/mysticatea/cpx).

## Installation

```
npm install httpsify@git@github.com:ledsun/httpsify.git
```

## Usage

```
cpx bar.html dist -t httpsify
```
