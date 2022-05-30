import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Alert, AlertTitle, Button, TextField } from '@mui/material'
import { useState } from 'react'
import { send } from 'emailjs-com';

export default function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [res, setRes] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
        setError(false)
        setRes('')
        setLoading(true)

        if (name && email && message) {
            send(
                'service_uh5gfdb',
                'template_hbbbvih',
                {
                    from_name: name,
                    to_name: 'YerjanDesign',
                    message: message,
                    reply_to: email
                },
                '76TUMz3PjebUhI9SR'
            )
                .then((response) => {
                    //console.log('SUCCESS!', response.status, response.text);
                    setName('')
                    setEmail('')
                    setMessage('')
                    setError(false)
                    setLoading(false)
                    setRes('Your message has been send!')
                })
                .catch((err) => {
                    // console.log('FAILED...', err);
                    setError(true)
                    setRes(err)
                    setLoading(false)
                });
        }
        else {
            setError(true)
            setRes('Please fill all required fields')
            setLoading(false)
        }
    }

    return (<>
        <Box display='flex' flexDirection='column' height='80vh' sx={{ mt: '80px' }} justifyContent='center' width='100vw'>
            <Container>
                <Box display='flex' justifyContent='center'>
                    <Box
                        maxWidth={600}
                        display='flex'
                        flexDirection='column'
                        alignItems='center'
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                            '& > :not(style)': { m: 1, width: { xs: '25ch', sm: '35ch', md: '50ch' } },
                        }}
                    >
                        <Typography variant='h1' fontSize={{ xs: '2rem', sm: '3rem', md: '5rem' }} fontWeight={700}>Get in Touch</Typography>

                        <TextField
                            required
                            label="Name"
                            variant="outlined"
                            onChange={e => setName(e.target.value)}
                            value={name}
                        />
                        <TextField
                            required
                            label="Email"
                            variant="outlined"
                            type='email'
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <TextField
                            required
                            label="Your message"
                            variant="outlined"
                            multiline
                            rows={4}
                            onChange={e => setMessage(e.target.value)}
                            value={message}
                        />
                        <Button variant="contained" type='submit' >Submit</Button>
                        {res && (<Alert severity="success"><AlertTitle>Success</AlertTitle>{res}</Alert>)}
                        {error && (<Alert severity="error"><AlertTitle>Error</AlertTitle>{res}</Alert>)}
                        {loading && (<Alert severity="warning"><AlertTitle>Sending...</AlertTitle></Alert>)}
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
    )
}
