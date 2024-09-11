import { Button } from "@/components/ui/button"

export default function AnimatedApplyButton() {
  return (
    <Button 
      className="relative overflow-hidden bg-white text-black border border-gray-300 hover:text-white transition-colors duration-300 group"
    >
      <span className="relative z-10">Apply Now</span>
      <div className="absolute inset-0 bg-[#9E0031] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out" />
    </Button>
  )
}