const bookModel = require('../model/bookModel');
const createComment = require('../model/commentModel')
const publication = require('../model/publicationModel')


async function allBooks(req, res) {
  try {
    const page = +req.query.page || 1;
    const limit = +req.query.limit || 10;

    const bookName = await bookModel.find().skip(skip).limit(limit);
    const totalCount = await bookModel.count();
    res.json({
      status: 'succees',
      dataCount: bookData.length,
      totalCount,
      data: bookData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'something went wrong',
      error,
    });
  }
}

async function getBooks(req, res) {
  try {
    const bookData = await bookModel.findOne({ _id: req.params.id });

    res.status(200).json({
      status: 'success',
      message: 'data uploaded',
      data: bookData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'data uploading failed',
      error,
    });
  }
}

async function createBooks(req, res) {
  try {
    const bookData = await publicationModel.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'data uploaded',
      data: bookData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: 'data uploading failed',
      error,
    });
  }
}

async function createComments(req, res) {
  try {
    const bookData = await commentModel.create(req.body);

    res.status(200).json({
      status: 'success',
      message: 'Comment created',
      data: bookData,
    });
  } catch (error) {
    res.status(400).json({
      status: 'failed',
      message: ' failed',
      error,
    });
  }
}





module.exports = {
  allBooks,
  getBooks,
  createBooks
};
