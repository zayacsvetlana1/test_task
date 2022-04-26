import {Button, Card, Container, Form} from "react-bootstrap";


export default function Login () {
	return (
		<Container className='d-flex justify-content-center'>
			<Card style={{width: 600}} className='p-5 mt-4'>
				<Form>
					<Form.Group className="mb-3" controlId="formBasicEmail">
						<Form.Label>E-mail</Form.Label>
						<Form.Control type="email" placeholder='Введите ваш e-mail...' />
					</Form.Group>

					<Form.Group className="mb-3" controlId="formBasicPassword">
						<Form.Label>Пароль</Form.Label>
						<Form.Control type="password" placeholder='Введите ваш пароль...' />
					</Form.Group>
					<Button variant="primary" type="submit">
						Войти
					</Button>
				</Form>
			</Card>
		</Container>
	)
}