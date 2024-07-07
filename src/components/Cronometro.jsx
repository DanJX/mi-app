import React, { useState, useCallback, useMemo } from 'react';

const Contador: React.FC = () => {
  // Estado para el contador y el valor de incremento personalizado
  const [contador, setContador] = useState(0);
  const [valorIncremento, setValorIncremento] = useState(1);

  // Función de incremento memorizada
  const incrementar = useCallback(() => {
    setContador((c) => c + valorIncremento);
  }, [valorIncremento]);

  // Función de reinicio memorizada
  const reiniciar = useCallback(() => {
    setContador(0);
  }, []);

  // Valor del contador memorizado
  const valorContador = useMemo(() => contador, [contador]);

  return (
    <div>
      <h2>Contador: {valorContador}</h2>
      <input
        type="number"
        value={valorIncremento}
        onChange={(e) => setValorIncremento(parseInt(e.target.value) || 0)}
      />
      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>Reiniciar</button>
    </div>
  );
};

export default Contador;