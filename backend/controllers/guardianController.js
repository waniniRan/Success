const pool = require('../db');

const getChildren = async (req, res) => {
  const { guardianId } = req.params;
  try {
    const result = await pool.query(
      'SELECT * FROM child WHERE guardianID = $1',
      [guardianId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = { getChildren };
