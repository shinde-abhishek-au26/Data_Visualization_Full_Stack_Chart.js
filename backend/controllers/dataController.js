import dataModel from '../models/dataModel.js';

const getAllData = async (req, res) => {
  try {
    // const filters = req.query; // Apply filters if any
    // console.log(filters, 'filters');
    const data = await dataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllData;
