const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require('../models/User.model');
const Lawyer = require('../models/Lawyer.model')
const Admin = require('../models/Admin.model');

const protectUser = asyncHandler( async())