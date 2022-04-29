import {Button, Card, Container, Form} from "react-bootstrap";
import {useState} from "react";
import {useActions} from "../hooks/useActions";
import {useRouter} from "next/router";


export default function Login () {

	const {login} = useActions()
	const router = useRouter()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const isLogin = login (email, password)

	const handleLogin = (e) => {
		e.preventDefault ();
		console.log('login with ', { email, password });

		if (isLogin) {
			router.push("/profile")
		}
	}

	return (
		<Container className='d-flex justify-content-center'>
			<Card style={{width: 600}} className='p-5 mt-4'>
				<Form onSubmit={handleLogin}>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>E-mail</Form.Label>
						<Form.Control
							type="email"
							placeholder='Введите ваш e-mail...'
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Пароль</Form.Label>
						<Form.Control
							type="password"
							placeholder='Введите ваш пароль...'
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</Form.Group>
					<Button variant="primary" type="submit">
						Войти
					</Button>
				</Form>
			</Card>
		</Container>
	)
}
