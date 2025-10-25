// /components/stepsData.js
import {
  Smile,
  HandMetal,
  Eye,
  MessageCircle,
  Ear,
  Sparkles,
  Target,
  Users,
  ShoppingBag,
  Palette,
  Gem,
  BarChart3,
  Gift,
  BookOpen,
  Key,
  ShieldCheck,
  Droplet,
  CreditCard,
  AlertTriangle,
  Fuel,
  FileText,
} from 'lucide-react';

export const stepsData = {
  1: {
    title: 'Recibe al Cliente - Capacitación Completa',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <HandMetal className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Marca lo que dominas:',
          items: [
            { icon: <Smile className="w-12 h-12" />, text: 'Sonríe' },
            { icon: <HandMetal className="w-12 h-12" />, text: 'Saluda' },
            { icon: <Eye className="w-12 h-12" />, text: 'Contacto visual' },
            { icon: <MessageCircle className="w-12 h-12" />, text: 'Pregunta' },
            { icon: <Ear className="w-12 h-12" />, text: 'Escucha' },
            { icon: <Sparkles className="w-12 h-12" />, text: 'Actitud positiva' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <Target className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Mejor pregunta para abrir?',
          options: [
            {
              icon: <MessageCircle className="w-10 h-10" />,
              text: '¿Qué necesitas?',
              correct: false,
              feedback: 'Muy directo',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: '¿Qué te trae hoy?',
              correct: true,
              feedback: '¡Perfecto!',
            },
            {
              icon: <ShoppingBag className="w-10 h-10" />,
              text: '¿Vas a comprar?',
              correct: false,
              feedback: 'Muy transaccional',
            },
            {
              icon: <Users className="w-10 h-10" />,
              text: 'Tenemos ofertas',
              correct: false,
              feedback: 'No es pregunta',
            },
          ],
          explanation: 'Las preguntas abiertas conectan mejor.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: '¿En qué orden atiendes?',
          options: ['Escuchar', 'Saludar', 'Ofrecer', 'Despedir'],
          correctOrder: ['Saludar', 'Escuchar', 'Ofrecer', 'Despedir'],
          win: 'Sabes el flujo perfecto.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Toca cada carta para revelar:',
          cards: [
            {
              icon: <Palette className="w-12 h-12" />,
              title: 'Personaliza',
              desc: 'Adapta tu mensaje a cada cliente.',
            },
            { icon: <Gem className="w-12 h-12" />, title: 'Beneficios', desc: 'Muestra cómo mejora su vida.' },
            {
              icon: <BarChart3 className="w-12 h-12" />,
              title: 'Prueba social',
              desc: 'Comparte historias de éxito.',
            },
            { icon: <Gift className="w-12 h-12" />, title: 'Valor único', desc: 'Destaca lo que te diferencia.' },
          ],
          tip: 'Voltea las tarjetas para ver el contenido.',
        },
      },
    ],
  },

  2: {
    title: 'Despacha Combustible - Capacitación Completa',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Fuel className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Antes de despachar, verifica:',
          items: [
            { icon: <Key className="w-12 h-12" />, text: 'Solicita la llave del tanque.' },
            { icon: <ShieldCheck className="w-12 h-12" />, text: 'Motor y aparatos electrónicos apagados.' },
            { icon: <Droplet className="w-12 h-12" />, text: 'Tipo y cantidad de combustible correctos.' },
            { icon: <Target className="w-12 h-12" />, text: 'Pantalla del dispensador en cero.' },
            { icon: <Users className="w-12 h-12" />, text: 'Motociclista desmontado y parador al piso.' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <ShieldCheck className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Qué debe hacer el grifero antes de iniciar el despacho?',
          options: [
            {
              icon: <Sparkles className="w-10 h-10" />,
              text: 'Llenar el tanque inmediatamente.',
              correct: false,
              feedback: 'Incorrecto. Primero verifica condiciones de seguridad.',
            },
            {
              icon: <ShieldCheck className="w-10 h-10" />,
              text: 'Confirmar que el motor esté apagado y la cantidad sea correcta.',
              correct: true,
              feedback: '¡Correcto! Seguridad ante todo.',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: 'Ofrecer promociones.',
              correct: false,
              feedback: 'No es el momento adecuado.',
            },
          ],
          explanation: 'El despacho seguro empieza verificando condiciones básicas.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Orden correcto del despacho:',
          options: [
            'Confirmar condiciones de seguridad',
            'Confirmar método de pago',
            'Iniciar despacho',
            'Vigilar derrames',
          ],
          correctOrder: [
            'Confirmar condiciones de seguridad',
            'Confirmar método de pago',
            'Iniciar despacho',
            'Vigilar derrames',
          ],
          win: '¡Conoces la secuencia perfecta para un despacho seguro!',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Recuerda durante el despacho:',
          cards: [
            {
              icon: <CreditCard className="w-12 h-12" />,
              title: 'Método de pago',
              desc: 'Confirma si es efectivo, tarjeta o vale antes de iniciar.',
            },
            {
              icon: <Droplet className="w-12 h-12" />,
              title: 'Evita derrames',
              desc: 'Revisa el flujo y evita llenado excesivo.',
            },
            {
              icon: <AlertTriangle className="w-12 h-12" />,
              title: 'Atento siempre',
              desc: 'Supervisa la pistola, no la dejes sin control.',
            },
            {
              icon: <FileText className="w-12 h-12" />,
              title: 'Comunicación',
              desc: 'Informa al cliente si hay algún inconveniente.',
            },
          ],
          tip: 'Voltea cada tarjeta para ver prácticas seguras de despacho.',
        },
      },
    ],
  },
  3: {
    title: 'Termina Despacho - Capacitación Completa',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Fuel className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Al finalizar el despacho, recuerda:',
          items: [
            { icon: <MessageCircle className="w-12 h-12" />, text: 'Informa al cliente que se completó la carga.' },
            {
              icon: <Droplet className="w-12 h-12" />,
              text: 'Espera que la pistola deje de gotear antes de colocarla.',
            },
            { icon: <ShieldCheck className="w-12 h-12" />, text: 'Coloca la tapa del tanque hasta que suene.' },
            { icon: <Key className="w-12 h-12" />, text: 'Devuelve la llave al conductor.' },
            { icon: <FileText className="w-12 h-12" />, text: 'Emite el comprobante (boleta o factura) siempre.' },
            {
              icon: <Smile className="w-12 h-12" />,
              text: 'Despedida cordial: “Hasta luego, agradecemos su preferencia”.',
            },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <AlertTriangle className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Qué se debe hacer antes de colocar la pistola en su soporte?',
          options: [
            {
              icon: <Fuel className="w-10 h-10" />,
              text: 'Apagar el dispensador de inmediato.',
              correct: false,
              feedback: 'Primero debes esperar que deje de gotear.',
            },
            {
              icon: <Droplet className="w-10 h-10" />,
              text: 'Esperar que deje de gotear el combustible.',
              correct: true,
              feedback: '¡Correcto! Así evitas derrames y accidentes.',
            },
            {
              icon: <Gift className="w-10 h-10" />,
              text: 'Ofrecer promociones al cliente.',
              correct: false,
              feedback: 'No es el momento adecuado.',
            },
          ],
          explanation: 'Esperar que la pistola deje de gotear garantiza seguridad y limpieza.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Orden correcto para terminar el despacho:',
          options: [
            'Informar que se terminó la carga',
            'Esperar que deje de gotear',
            'Colocar tapa y devolver llave',
            'Emitir comprobante y despedirse',
          ],
          correctOrder: [
            'Informar que se terminó la carga',
            'Esperar que deje de gotear',
            'Colocar tapa y devolver llave',
            'Emitir comprobante y despedirse',
          ],
          win: '¡Excelente! Sigues el protocolo correcto de cierre del despacho.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Buenas prácticas al cerrar una atención:',
          cards: [
            {
              icon: <FileText className="w-12 h-12" />,
              title: 'Comprobante siempre',
              desc: 'Entrega el ticket aunque el cliente no lo pida.',
            },
            {
              icon: <Smile className="w-12 h-12" />,
              title: 'Despedida amable',
              desc: 'Agradece siempre la preferencia del cliente.',
            },
            {
              icon: <ShieldCheck className="w-12 h-12" />,
              title: 'Revisión visual',
              desc: 'Asegura que no haya fugas ni residuos en la zona.',
            },
            {
              icon: <Target className="w-12 h-12" />,
              title: 'Cierre correcto',
              desc: 'Verifica que la pistola y el dispensador queden seguros.',
            },
          ],
          tip: 'Voltea las tarjetas para reforzar tus hábitos de cierre seguro y profesional.',
        },
      },
    ],
  },
};
