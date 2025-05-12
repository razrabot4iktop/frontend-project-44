#!/usr/bin/env node
import greetingMessage from '../src/cli.js';

const name = greetingMessage();
console.log(`${name}`);
