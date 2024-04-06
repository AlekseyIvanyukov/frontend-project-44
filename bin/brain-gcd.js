#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/index.js';
import { gameGcd } from '../src/games/gcd.js';

gameGcd();
