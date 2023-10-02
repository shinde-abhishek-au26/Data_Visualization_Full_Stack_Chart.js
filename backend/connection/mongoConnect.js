import { connect } from 'mongoose';

const mongoClient = connect('mongodb://127.0.0.1:27017/dashboard_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export default mongoClient;
