import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_GNBLayout/publish/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>{`Hello "/publish/"!`}</div>
}
