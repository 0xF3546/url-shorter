import { Router } from "express";
import { emailService } from "../utils/EmailService.js";

const router: Router = Router();

router.post('/sendContact', async (req, res) => {
    const username = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    await emailService.sendAsync("management@voidroleplay.de", "[System] Kontaktformular", `Hallo Team!<br><br>${username} hat eine Nachricht über das Kontaktformular gesendet.<br>Message: ${message}<br>Email: ${email}`);
    await emailService.sendAsync(email, "Kontaktformular eingegangne", `Hallo ${username}!<br><br>Wir haben deine Nachricht erhalten und kümmern uns so schnell wie möglich drum.`);
    return res.json();
});

export const HomeRouter: Router = router;