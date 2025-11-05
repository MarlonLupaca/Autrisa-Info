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
    title: 'Recibe y Confirma Solicitud (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <HandMetal className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Pasos iniciales del Grifero:',
          items: [
            { icon: <Smile className="w-12 h-12" />, text: 'Recibe al Cliente / Saluda y Pregunta Solicitud.' },
            { icon: <Key className="w-12 h-12" />, text: 'Solicita Llave / Confirma Seguridad y Datos.' },
            { icon: <CreditCard className="w-12 h-12" />, text: 'Pregunta Forma de Pago / Verifica Conformidad.' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <Target className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Cuál es el primer paso del Grifero al recibir al cliente según I-13-02?',
          options: [
            {
              icon: <MessageCircle className="w-10 h-10" />,
              text: 'Preguntar la forma de pago.',
              correct: false,
              feedback: 'Esa es la tercera acción, no la primera.',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: 'Recibir, Saludar y Preguntar Solicitud.',
              correct: true,
              feedback: '¡Correcto! Es el inicio del servicio.',
            },
            {
              icon: <Key className="w-10 h-10" />,
              text: 'Solicitar la llave y confirmar datos.',
              correct: false,
              feedback: 'Esta es la segunda acción.',
            },
          ],
          explanation: 'El flujograma indica que el Grifero Recibe/Saluda/Pregunta Solicitud como primer paso.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Orden de las primeras acciones del Grifero según I-13-02:',
          options: [
            'Pregunta Forma de Pago / Verifica Conformidad',
            'Recibe al Cliente / Saluda y Pregunta Solicitud',
            'Solicita Llave / Confirma Seguridad y Datos',
          ],
          correctOrder: [
            'Recibe al Cliente / Saluda y Pregunta Solicitud',
            'Solicita Llave / Confirma Seguridad y Datos',
            'Pregunta Forma de Pago / Verifica Conformidad',
          ],
          win: 'Sabes el flujo perfecto de recepción y solicitud de datos.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Puntos clave en la recepción:',
          cards: [
            {
              icon: <Users className="w-12 h-12" />,
              title: 'Cliente',
              desc: 'El cliente Solicita Combustible / Confirma Datos.',
            },
            {
              icon: <Key className="w-12 h-12" />,
              title: 'Llave',
              desc: 'Pedir la llave del tanque es un paso de seguridad y confirmación.',
            },
            {
              icon: <CreditCard className="w-12 h-12" />,
              title: 'Pago',
              desc: 'Confirmar la forma de pago (efectivo, tarjeta, etc.) antes de despachar.',
            },
          ],
          tip: 'Voltea las tarjetas para reforzar la información.',
        },
      },
    ],
  },

  2: {
    title: 'Despacha Combustible (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Fuel className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Acciones de despacho y finalización del Grifero:',
          items: [
            { icon: <Fuel className="w-12 h-12" />, text: 'Despacha Combustible y Vigila Derrames.' },
            { icon: <Droplet className="w-12 h-12" />, text: 'Termina Despacho / Espera Goteo.' },
            { icon: <Key className="w-12 h-12" />, text: 'Coloca Tapa / Devuelve Llave / Pregunta Comprobante.' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <ShieldCheck className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Cuál es la acción inmediata después de terminar el despacho?',
          options: [
            {
              icon: <Sparkles className="w-10 h-10" />,
              text: 'Cobrar el importe total.',
              correct: false,
              feedback: 'El cobro lo realiza el cliente después de la gestión de la tapa/llave.',
            },
            {
              icon: <Droplet className="w-10 h-10" />,
              text: 'Esperar Goteo antes de retirar la pistola.',
              correct: true,
              feedback: '¡Correcto! Terminar Despacho / Espera Goteo es el paso inmediato.',
            },
            {
              icon: <Key className="w-10 h-10" />,
              text: 'Colocar la tapa inmediatamente.',
              correct: false,
              feedback: 'Primero debe esperar el goteo.',
            },
          ],
          explanation:
            'Según el flujograma, el Grifero debe esperar el goteo inmediatamente después de terminar el despacho.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Orden correcto del despacho según I-13-02:',
          options: [
            'Termina Despacho / Espera Goteo',
            'Despacha Combustible y Vigila Derrames',
            'Coloca Tapa / Devuelve Llave / Pregunta Comprobante',
          ],
          correctOrder: [
            'Despacha Combustible y Vigila Derrames',
            'Termina Despacho / Espera Goteo',
            'Coloca Tapa / Devuelve Llave / Pregunta Comprobante',
          ],
          win: '¡Conoces la secuencia perfecta para el despacho y cierre de carga!',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Buenas prácticas durante la carga:',
          cards: [
            {
              icon: <AlertTriangle className="w-12 h-12" />,
              title: 'Vigilar',
              desc: 'Siempre Vigilar Derrames mientras se despacha el combustible.',
            },
            {
              icon: <Droplet className="w-12 h-12" />,
              title: 'Goteo',
              desc: 'Asegurar que no haya goteo de la pistola antes de guardarla.',
            },
            {
              icon: <FileText className="w-12 h-12" />,
              title: 'Comprobante',
              desc: 'El Grifero debe Preguntar Comprobante (boleta/factura).',
            },
          ],
          tip: 'Voltea cada tarjeta para ver prácticas de seguridad y documentación.',
        },
      },
    ],
  },
  3: {
    title: 'Cierre de Atención y Despedida (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Smile className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Pasos finales del proceso I-13-02:',
          items: [
            { icon: <CreditCard className="w-12 h-12" />, text: 'Cliente Realiza el Pago.' },
            { icon: <MessageCircle className="w-12 h-12" />, text: 'Grifero realiza la Despedida.' },
            { icon: <ShieldCheck className="w-12 h-12" />, text: 'Cliente procede a la Salida del Grifo.' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <MessageCircle className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: '¿Cuál es la frase de despedida estándar según el flujograma I-13-02?',
          options: [
            {
              icon: <Sparkles className="w-10 h-10" />,
              text: 'Que tenga un buen día.',
              correct: false,
              feedback: 'No es la frase textual documentada.',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: 'Hasta luego, agradecemos su preferencia.',
              correct: true,
              feedback: '¡Correcto! Es la despedida textual del proceso.',
            },
            {
              icon: <Users className="w-10 h-10" />,
              text: 'Vuelva pronto.',
              correct: false,
              feedback: 'No es la frase textual documentada.',
            },
          ],
          explanation: 'La despedida textual en el flujograma es "Hasta luego, agradecemos su preferencia".',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Orden correcto para terminar la atención:',
          options: [
            'Despedida (Grifero)',
            'Realiza el Pago (Cliente)',
            'Coloca Tapa / Devuelve Llave / Pregunta Comprobante (Grifero)',
          ],
          correctOrder: [
            'Coloca Tapa / Devuelve Llave / Pregunta Comprobante (Grifero)',
            'Realiza el Pago (Cliente)',
            'Despedida (Grifero)',
          ],
          win: '¡Excelente! Sigues el protocolo correcto de cierre de la atención.',
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
              title: 'Comprobante',
              desc: 'Asegúrate de preguntar siempre por el comprobante (boleta/factura).',
            },
            {
              icon: <Smile className="w-12 h-12" />,
              title: 'Despedida',
              desc: 'Usa la frase estándar: "Hasta luego, agradecemos su preferencia".',
            },
            {
              icon: <Target className="w-12 h-12" />,
              title: 'Meta',
              desc: 'La meta es una "Salida del Grifo" fluida y la satisfacción del cliente.',
            },
          ],
          tip: 'Voltea las tarjetas para reforzar tus hábitos de cierre profesional.',
        },
      },
    ],
  },
};
