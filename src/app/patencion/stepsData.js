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
    title: 'Paso 1: Recibir y Confirmar la Solicitud (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <HandMetal className="w-12 h-12 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Tus pasos iniciales como Grifero:',
          items: [
            { icon: <Smile className="w-12 h-12" />, text: 'Recibir al cliente: Saludar y preguntar qué necesita.' },
            {
              icon: <Key className="w-12 h-12" />,
              text: 'Solicitar la llave: Confirmar seguridad y datos del vehículo.',
            },
            {
              icon: <CreditCard className="w-12 h-12" />,
              text: 'Preguntar forma de pago: Verificar la conformidad del cliente.',
            },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <Target className="w-20 h-20 mx-auto text-mainAutrisa" />,

          question: 'Según el instructivo I-13-02, ¿qué es lo primero que debes hacer al recibir a un cliente?',
          options: [
            {
              icon: <MessageCircle className="w-10 h-10" />,
              text: 'Preguntar la forma de pago.',
              correct: false,

              feedback: 'Casi, pero no. Esta es la tercera acción, no la primera.',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: 'Recibirlo, saludarlo y preguntarle qué necesita.',
              correct: true,
              feedback: '¡Correcto! Así se inicia un buen servicio.',
            },
            {
              icon: <Key className="w-10 h-10" />,
              text: 'Solicitar la llave y confirmar datos.',
              correct: false,
              feedback: 'Estás cerca. Esta es la segunda acción, justo después de saludar.',
            },
          ],

          explanation:
            'El flujograma I-13-02 indica que tu primer paso es siempre Recibir, Saludar y Preguntar la solicitud al cliente.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Ordena las primeras acciones que debes realizar (según I-13-02):',
          options: [
            'Preguntar la forma de pago y verificar conformidad',
            'Recibir al cliente, saludar y preguntar qué necesita',
            'Solicitar la llave y confirmar datos de seguridad',
          ],
          correctOrder: [
            'Recibir al cliente, saludar y preguntar qué necesita',
            'Solicitar la llave y confirmar datos de seguridad',
            'Preguntar la forma de pago y verificar conformidad',
          ],

          win: '¡Excelente! Sabes perfectamente cómo recibir al cliente y solicitar los datos.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Puntos clave para recordar en la recepción:',
          cards: [
            {
              icon: <Users className="w-12 h-12" />,
              title: 'Cliente',

              desc: 'El cliente es quien te solicita el combustible y confirma los datos que le pides.',
            },
            {
              icon: <Key className="w-12 h-12" />,
              title: 'Llave',
              desc: 'Pedir la llave del tanque es un paso clave de seguridad y confirmación.',
            },
            {
              icon: <CreditCard className="w-12 h-12" />,
              title: 'Pago',
              desc: 'Siempre confirma la forma de pago (efectivo, tarjeta, etc.) antes de empezar a despachar.',
            },
          ],
          tip: 'Voltea las tarjetas para repasar y reforzar esta información.',
        },
      },
    ],
  },

  2: {
    title: 'Paso 2: Despachar Combustible (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Fuel className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Tus acciones durante el despacho y el cierre de la carga:',
          items: [
            {
              icon: <Fuel className="w-12 h-12" />,
              text: 'Despachar combustible vigilando siempre posibles derrames.',
            },
            { icon: <Droplet className="w-12 h-12" />, text: 'Terminar el despacho y esperar que termine el goteo.' },
            {
              icon: <Key className="w-12 h-12" />,
              text: 'Colocar la tapa, devolver la llave y preguntar por el comprobante.',
            },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <ShieldCheck className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: 'Justo después de que la pistola de combustible se detiene, ¿qué debes hacer inmediatamente?',
          options: [
            {
              icon: <Sparkles className="w-10 h-10" />,
              text: 'Cobrar el importe total.',
              correct: false,
              feedback: 'Aún no. El cliente realiza el pago después de que le devuelves la llave.',
            },
            {
              icon: <Droplet className="w-10 h-10" />,
              text: 'Esperar que termine el goteo antes de retirar la pistola.',
              correct: true,
              feedback: '¡Correcto! Es fundamental esperar el goteo para evitar derrames.',
            },
            {
              icon: <Key className="w-10 h-10" />,
              text: 'Colocar la tapa inmediatamente.',
              correct: false,
              feedback: 'Casi. Justo antes de poner la tapa, debes esperar el goteo.',
            },
          ],
          explanation:
            'Según el flujograma, tu acción inmediata tras finalizar la carga es esperar el goteo para asegurar que no se derrame combustible.',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Ordena la secuencia correcta para despachar combustible (según I-13-02):',
          options: [
            'Terminar el despacho y esperar el goteo',
            'Despachar combustible y vigilar derrames',
            'Colocar la tapa, devolver la llave y preguntar por el comprobante',
          ],
          correctOrder: [
            'Despachar combustible y vigilar derrames',
            'Terminar el despacho y esperar el goteo',
            'Colocar la tapa, devolver la llave y preguntar por el comprobante',
          ],
          win: '¡Perfecto! Conoces la secuencia ideal para un despacho seguro y completo.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Buenas prácticas que debes aplicar durante la carga:',
          cards: [
            {
              icon: <AlertTriangle className="w-12 h-12" />,
              title: 'Vigilar',
              desc: 'Tu atención es clave: vigila siempre posibles derrames mientras despachas.',
            },
            {
              icon: <Droplet className="w-12 h-12" />,
              title: 'Goteo',
              desc: 'Asegúrate de que la pistola no gotee antes de volver a colocarla en el surtidor.',
            },
            {
              icon: <FileText className="w-12 h-12" />,
              title: 'Comprobante',
              desc: 'Es tu responsabilidad preguntar al cliente si necesitará boleta o factura.',
            },
          ],
          tip: 'Voltea cada tarjeta para repasar estas prácticas de seguridad y documentación.',
        },
      },
    ],
  },
  3: {
    title: 'Paso 3: Cierre de la Atención y Despedida (I-13-02)',
    subSteps: [
      {
        type: 'visual-checklist',
        content: {
          icon: <Smile className="w-16 h-16 mx-auto text-mainAutrisa animate-bounce" />,
          intro: 'Estos son los pasos finales del proceso I-13-02:',
          items: [
            { icon: <CreditCard className="w-12 h-12" />, text: 'El cliente realiza el pago.' },
            { icon: <MessageCircle className="w-12 h-12" />, text: 'Como Grifero, te despides amablemente.' },
            { icon: <ShieldCheck className="w-12 h-12" />, text: 'El cliente se retira de la estación de servicio.' },
          ],
        },
      },
      {
        type: 'visual-quiz',
        content: {
          icon: <MessageCircle className="w-20 h-20 mx-auto text-mainAutrisa" />,
          question: 'Según el flujograma I-13-02, ¿cuál es la frase exacta que debes usar para despedirte?',
          options: [
            {
              icon: <Sparkles className="w-10 h-10" />,
              text: 'Que tenga un buen día.',
              correct: false,
              feedback: 'Es una frase amable, pero no es la frase estándar del instructivo.',
            },
            {
              icon: <Smile className="w-10 h-10" />,
              text: 'Hasta luego, agradecemos su preferencia.',
              correct: true,
              feedback: '¡Correcto! Esta es la despedida oficial que debemos usar.',
            },
            {
              icon: <Users className="w-10 h-10" />,
              text: 'Vuelva pronto.',
              correct: false,
              feedback: 'Aunque es una buena intención, no es la frase estándar del instructivo.',
            },
          ],
          explanation:
            'El flujograma es claro: la despedida profesional estándar es "Hasta luego, agradecemos su preferencia".',
        },
      },
      {
        type: 'drag-drop',
        content: {
          question: 'Ordena los pasos finales para terminar correctamente la atención:',
          options: [
            'Despedirte del cliente (Grifero)',
            'El cliente realiza el pago (Cliente)',
            'Colocar tapa, devolver llave y preguntar comprobante (Grifero)',
          ],
          correctOrder: [
            'Colocar tapa, devolver llave y preguntar comprobante (Grifero)',
            'El cliente realiza el pago (Cliente)',
            'Despedirte del cliente (Grifero)',
          ],
          win: '¡Excelente! Sigues el protocolo de cierre al pie de la letra.',
        },
      },
      {
        type: 'flip-cards',
        content: {
          icon: <BookOpen className="w-16 h-16 mx-auto text-mainAutrisa" />,
          intro: 'Buenas prácticas para un cierre de atención profesional:',
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
              desc: 'Nuestra meta es que el cliente se vaya satisfecho y que su salida de la estación sea fluida y segura.',
            },
          ],
          tip: 'Voltea las tarjetas para reforzar tus buenos hábitos de cierre.',
        },
      },
    ],
  },
};
