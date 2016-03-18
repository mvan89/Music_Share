var mongoose = require('mongoose');

var tracksSchema = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed }, { strict : false });

mongoose.model('tracks', tracksSchema);