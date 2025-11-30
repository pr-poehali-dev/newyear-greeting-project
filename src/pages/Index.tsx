import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [showWishes, setShowWishes] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowWishes(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 10,
    size: 10 + Math.random() * 20
  }));

  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3,
    color: ['#ef4444', '#10b981', '#fbbf24', '#3b82f6'][Math.floor(Math.random() * 4)]
  }));

  const ornaments = [
    { icon: 'Sparkles', color: 'text-accent', delay: 0 },
    { icon: 'Star', color: 'text-yellow-400', delay: 0.2 },
    { icon: 'Gift', color: 'text-primary', delay: 0.4 },
    { icon: 'Heart', color: 'text-red-400', delay: 0.6 },
  ];

  const wishes = [
    { icon: 'Heart', title: 'Любви и тепла', description: 'Пусть каждый день наполняется радостью и заботой близких' },
    { icon: 'TrendingUp', title: 'Успехов и процветания', description: 'Достижения новых высот и реализации всех планов' },
    { icon: 'Smile', title: 'Счастья и здоровья', description: 'Крепкого здоровья и искренних улыбок каждый день' },
    { icon: 'Sparkles', title: 'Волшебства и чудес', description: 'Исполнения желаний и приятных неожиданностей' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-card to-background overflow-hidden relative">
      <img 
        src="https://cdn.poehali.dev/projects/be3e18e3-61f2-424f-95de-df6b07b1c818/files/6850ebcf-3028-4c12-89b9-b786844c262e.jpg"
        alt="Праздничная такса"
        className="fixed bottom-0 right-8 w-48 md:w-64 lg:w-80 opacity-30 pointer-events-none z-0 animate-float"
      />

      {snowflakes.map((snowflake) => (
        <div
          key={snowflake.id}
          className="absolute text-white pointer-events-none animate-snowfall"
          style={{
            left: `${snowflake.left}%`,
            animationDelay: `${snowflake.delay}s`,
            animationDuration: `${snowflake.duration}s`,
            fontSize: `${snowflake.size}px`,
            top: '-10vh'
          }}
        >
          ❄
        </div>
      ))}

      {confetti.map((piece) => (
        <div
          key={`confetti-${piece.id}`}
          className="absolute w-2 h-6 pointer-events-none animate-confetti"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
            top: '-10vh'
          }}
        />
      ))}

      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          <section className="text-center space-y-8 animate-fade-in">
            <div className="flex justify-center gap-6 mb-8">
              {ornaments.map((ornament, index) => (
                <div
                  key={index}
                  className={`${ornament.color} animate-float animate-sparkle`}
                  style={{ animationDelay: `${ornament.delay}s` }}
                >
                  <Icon name={ornament.icon} size={48} />
                </div>
              ))}
            </div>

            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-foreground leading-tight">
              С Новым 2025 Годом!
            </h1>

            <div className="relative inline-block">
              <div className="absolute -inset-4 bg-accent/20 blur-2xl rounded-full animate-pulse" />
              <p className="relative font-body text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto leading-relaxed px-4">
                Пусть этот год принесёт вам счастье, здоровье и исполнение всех желаний! 
                Новый год — время волшебства и новых возможностей! ✨🎄
              </p>
            </div>

            <div className="flex justify-center gap-4 pt-4">
              <div className="text-6xl animate-float" style={{ animationDelay: '0s' }}>🎄</div>
              <div className="text-6xl animate-float" style={{ animationDelay: '0.5s' }}>🎁</div>
              <div className="text-6xl animate-float" style={{ animationDelay: '1s' }}>🎄</div>
            </div>
          </section>

          {showWishes && (
            <section className="space-y-8 animate-fade-in">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground">
                Пожелания на 2025 год
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {wishes.map((wish, index) => (
                  <Card
                    key={index}
                    className="p-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 text-accent group-hover:animate-sparkle">
                        <Icon name={wish.icon} size={32} />
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="font-heading text-2xl font-bold text-foreground">
                          {wish.title}
                        </h3>
                        <p className="font-body text-foreground/80 leading-relaxed">
                          {wish.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <section className="text-center space-y-6 py-12 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-xl opacity-50 animate-pulse" />
              <p className="relative font-body text-3xl md:text-4xl font-bold text-foreground px-8 py-4">
                Счастливого Нового Года! 🎊
              </p>
            </div>
            
            <p className="font-body text-lg text-foreground/70 italic">
              Пусть каждый день будет наполнен радостью и волшебством! ✨
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;