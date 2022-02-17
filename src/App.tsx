import { Section, Space, Button, Anchor, Input } from '@dnb/eufemia'

export default function App() {
  return (
    <Section spacing>
      <Space left>
        <Button href="/" target="_blank">
          Link
        </Button>
        <Anchor left href="/" target="_blank">
          Link
        </Anchor>
        <Input left maxLength={4} foo="bar" />
      </Space>
    </Section>
  )
}
