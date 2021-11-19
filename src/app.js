const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


const useRoutes = require('./routes')