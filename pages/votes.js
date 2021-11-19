import { useSession } from "next-auth/react"

const votes = () => {
  const { data: session } = useSession()

  return (
    <section>
      <h1>Votes Page</h1>
      <p>Cast your vote, {session.user.name || session.user.email}</p>
    </section>
  )
}

votes.auth = true;

export default votes;
