/**
 * @swagger
 * /example:
 *   get:
 *     summary: Get example data
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get("/example", (req, res) => {
  // Your route logic here
  res.status(200).json({ message: "Example data" });
});
