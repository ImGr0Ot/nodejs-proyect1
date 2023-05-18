import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado;");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "algo fue mal",
    });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0)
      return res.status(404).json({ message: "Empleado no encontrado" });
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "algo fue mal",
    });
  }
};

export const setEmpleado = async (req, res) => {
  try {
    const { name, salary } = req.body;
    const [rows] = await pool.query(
      "INSERT INTO empleado (name,salario) VALUES (?,?)",
      [name, salary]
    );
    res.send({
      id: rows.insertId,
      name,
      salary,
    });
  } catch (error) {
    return res.status(500).json({
      message: "algo fue mal",
    });
  }
};

export const updateEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleado SET name = IFNULL(?, name), salario = IFNULL(?, salario) WHERE id = ?",
      [name, salario, id]
    );

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });
    const [rows] = await pool.query("SELECT * FROM empleado WHERE id = ?", [
      id,
    ]);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "algo fue mal",
    });
  }
};

export const deleteEmpleado = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM empleado WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows <= 0)
      return res.status(404).json({ message: "Empleado no encontrado" });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "algo fue mal",
    });
  }
};
