"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/saveData", (req, res) => {
    let body = req.body;
    let header = req.headers;
    let auth = header.authorization;
    if (!auth || !auth.startsWith("TEST")) {
        res.status(401).json({ error: "Unauthorized" });
        return;
    }
    let fileName = req.body.fileName;
    let data = req.body.data;
    if (!fileName || !data) {
        res.status(402).json({ error: "Invalid Body" });
        return;
    }
    res.json({ message: "done", data: { completed: true } });
});
app.listen(3000);
