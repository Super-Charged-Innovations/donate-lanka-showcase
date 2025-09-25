import { useEffect, useState, useRef } from "react";
import { Users, DollarSign, Target, Building } from "lucide-react";
import { formatCurrency } from "@/utils/currency";
import { formatNumber, formatCompactNumber } from "@/utils/numbers";
interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  formatter?: (value: number) => string;
}
const Counter = ({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  formatter
}: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.5
    });
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let startTime: number;
    let animationFrame: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);
      setCount(currentCount);
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    animationFrame = requestAnimationFrame(animate);
    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);
  const displayValue = formatter ? formatter(count) : count.toLocaleString();
  return <div ref={elementRef}>
      {prefix}{displayValue}{suffix}
    </div>;
};
const statistics = [{
  icon: Users,
  label: "Active Donors",
  value: 72854,
  formatter: (value: number) => formatNumber(value),
  color: "text-primary"
}, {
  icon: DollarSign,
  label: "Successfully Raised",
  value: 875000000,
  prefix: "LKR ",
  formatter: (value: number) => formatCompactNumber(value),
  color: "text-warning"
}, {
  icon: Target,
  label: "Projects Completed",
  value: 1847,
  formatter: (value: number) => formatNumber(value),
  color: "text-success"
}, {
  icon: Building,
  label: "Communities Impacted",
  value: 12400,
  suffix: "+",
  formatter: (value: number) => formatNumber(value),
  color: "text-secondary"
}];
export const StatisticsCounter = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">
                  <Counter
                    end={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    formatter={stat.formatter}
                  />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};