import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Tile() {
  return (
      <Card className="w-80 h-80 hover-move cursor-pointer transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
        <CardHeader>
          <CardTitle>Hover Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p>This card moves slightly when you hover over it. Try it out!</p>
        </CardContent>
      </Card>
  )
}