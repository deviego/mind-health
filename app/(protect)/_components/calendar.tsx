import { useState } from 'react';

interface AgendaProps {
  horarios: string[];
  profissionais: string[];
  agendamentos: { cliente: string; horario: string; profissional: string }[];
}

export function Scheduler({ horarios, profissionais, agendamentos }:AgendaProps){
  const [agenda, setAgenda] = useState<{ [key: string]: string }>(() => {
    const initialAgenda: { [key: string]: string } = {};
    agendamentos.forEach(agendamento => {
      initialAgenda[${agendamento.profissional}-${agendamento.horario}] = agendamento.cliente;
    });
    return initialAgenda;
  });

  return (
    <div>
      <h2>Agenda</h2>
      <table>
        <thead>
          <tr>
            <th>Horário</th>
            {profissionais.map((profissional, index) => (
              <th key={index}>{profissional}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {horarios.map((horario, index) => (
            <tr key={index}>
              <td>{horario}</td>
              {profissionais.map((profissional, index) => (
                <td key={index}>
                  {agenda[${profissional}-${horario}] && (
                    <div>{agenda[${profissional}-${horario}]}</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
                  }