import { zodResolver } from '@hookform/resolvers/zod'
import { Button, Text, TextInput } from '@ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Form, FormAnnotation } from './styles'

const claimUsernameFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'Usuário deve ter no mínimo 3 letras' })
    .regex(/^([a-z\\\\-]+)$/i, {
      message: 'Usuário deve conter apenas letras e hiféns',
    })
    .transform((username) => username.toLowerCase()),
})

type ClaimUsernameFormData = z.infer<typeof claimUsernameFormSchema>

export function ClaimUsernameForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClaimUsernameFormData>({
    resolver: zodResolver(claimUsernameFormSchema),
  })

  const router = useRouter()

  async function handleClaimUsername(data: ClaimUsernameFormData) {
    const { username } = data

    await router.push(`/register?username=${username}`)
  }

  return (
    <>
      <Form as="form" onSubmit={handleSubmit(handleClaimUsername)}>
        <TextInput
          size="sm"
          prefix="ignite.com"
          placeholder="seu-usuario"
          {...register('username')}
        />
        <Button size="sm" type="submit">
          Reservar
          <ArrowRight />
        </Button>
        <FormAnnotation>
          <Text size="sm">
            {errors.username
              ? errors.username.message
              : 'Digite o nome de usuário desejado'}
          </Text>
        </FormAnnotation>
      </Form>
    </>
  )
}
