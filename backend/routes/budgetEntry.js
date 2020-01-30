const budgetEntryRouter = require("express").Router();
const database = require("../database");
const authRequired = require("../middleware/authRequired");

budgetEntryRouter.post("/new", authRequired, (req, res) => {
	const createNewBudgetEntry = `INSERT INTO budget_entry VALUES (?, ?, ?, ?, ?, ?, ?, ?)`

	database.run(createNewBudgetEntry, 
		[
			req.userId,
			req.body.amount,
			req.body.isNeeds,
			req.body.isWants,
			req.body.isSavings,
			req.body.dateOfEntry,
			req.body.monthOfEntry,
			req.body.comment
		], (err) => {
			if(err){
				console.log(err)
				return res.status(500).json({
					status: 500,
					message: "something went wrong. try again"
				});
			} else{
				return res.status(200).json({
					status: 200,
					message: "created a new entry."
				});
			};
		});
});


module.exports = budgetEntryRouter;