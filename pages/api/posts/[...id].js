export default (req, res) => {
  const { id } = req.query;
  console.log(id);
  res.status(200).json({ name: id.join(',')});
};
