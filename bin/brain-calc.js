#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/index.js';
import { gameCalc } from '../src/games/calc.js';

gameCalc();
