import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getAuthToken, request } from '../../axiosHelper';
import axios from 'axios';
import { FaPlus, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import lionseye from "../../Assets/Images/lionseye.jpeg"
import OutlineButton from "../../Components/Buttons/OutlineButton.jsx"
const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  margin: 20px 0;
  margin-left: -2px;
  max-width: 100%;
`;
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 1em;
  font-family: Arial, sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
const Logo = styled.img`
  width: 50px;
  height: 50px;
`;


const Thead = styled.thead`
  background-color: navy;
  color: #ffffff;
  text-align: left;

`;

const Th = styled.th`
  padding: 12px 15px;
  cursor: pointer;

  &:hover {
    background-color: #5555cc;
  }
`;
const StickyTh = styled.td`
  padding: 12px 15px;
  background: navy;
  min-width: 50px; /* Adjust as needed */
  max-width: 100px; /* Adjust as needed */
  position: sticky;
  left: 0;
  z-index: 999;
  &:hover {
      background-color: #5555cc;
    }
`;
const ThContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Td = styled.td`
  padding: 12px 15px;
`;

const Tr = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:last-of-type {
    border-bottom: 2px solid navy;
  }
`;
const StickyTd = styled.td`
  padding: 12px 15px;
  position: sticky;
  border-collapse: collapse;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 1);
  left: 0;
  background-color: #fff;
  z-index: 999;
`;
const MetricsTable = ({ userId, metrics: propsMetrics, setMetricsModalOpen, editable, updateMetricsList, deleteMetricById}) => {
    const [metrics, setMetrics] = useState(propsMetrics || []);
    const [loading, setLoading] = useState(!propsMetrics);
    const [editedMetrics, setEditedMetrics] = useState([]);
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [sortConfig, setSortConfig] = useState({ key: 'year', direction: 'ascending' });
    useEffect(() => {
        setEditedMetrics(metrics);
      }, [metrics]);

    useEffect(() => {

        if (!propsMetrics && userId) {
            const fetchMetrics = async () => {
                try {
                    const response = await axios.get(`/metrics/${userId}`);
                    setMetrics(response.data);
                    console.log(metrics)
                    setError(null);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            };

            fetchMetrics();
        }
    }, [userId,   propsMetrics]);
    const sortMetrics = (metrics) => {
        if (!sortConfig.key) return metrics;
        return [...metrics].sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      };
    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
          direction = 'descending';
        }
        setSortConfig({ key, direction });
      };
       const handleEdit = () => {
          setIsEditing(true);
        };
    const handleSave = () => {
        setIsEditing(false);
        updateMetricsList(editedMetrics);
      };
   const handleCancel = () => {
      setIsEditing(false);
      console.log(metrics)
      setEditedMetrics(metrics);
    };
    const handleDelete = (id) => {
        const updatedMetrics = editedMetrics.filter(metric => metric.id !== id);
        setEditedMetrics(updatedMetrics);
        deleteMetricById(id);
    };
    const handleChange = (id, field, value) => {
        const updatedMetrics = editedMetrics.map(metric =>
              metric.id === id ? { ...metric, [field]: value } : metric
            );
            setEditedMetrics(updatedMetrics);
    };
    const parseNumber = (value) => {
        return parseFloat(value.replace(/[^0-9.-]+/g, ""));
      };
    const calculateAverage = (key) => {
        const total = metrics.reduce((acc, metric) => acc + parseNumber(metric[key] || "0"), 0);
        return (total / metrics.length).toFixed(2);
      };
      const getFormattedAverage = (key) => {
          const average = calculateAverage(key);
          return isNaN(average) ? "-" : formatCurrency(average);
        };
         const formatCurrency = (value) => {
            return `$${parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
          };





    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;
    if (metrics.length === 0) {
        return <OutlineButton onClick={(e) => {setMetricsModalOpen(true)}}> Add Metrics <FaPlus /> </OutlineButton>;
    }
    const sortedMetrics = () => {
        const sortedMetrics = [...editedMetrics];
        if (sortConfig.key !== null) {
          sortedMetrics.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
          });
        }
        return sortedMetrics;
      };
    return (
    <TableContainer>
        <Table>
              <Thead>
                <Tr>
                  <StickyTh onClick={() => handleSort('year')}>
                  <ThContent>
                    Year {sortConfig.key === 'year' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                  </ThContent>
                </StickyTh>
                <Th>
                  <ThContent>
                   Company
                  </ThContent>
                </Th>
                            <Th onClick={() => handleSort('salesCycle')}>
                              <ThContent>
                                Sales Cycle {sortConfig.key === 'salesCycle' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                            <Th onClick={() => handleSort('targetVerticals')}>
                              <ThContent>
                                Target Verticals {sortConfig.key === 'targetVerticals' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                            <Th onClick={() => handleSort('buyerPersona')}>
                              <ThContent>
                                Buyer Persona {sortConfig.key === 'buyerPersona' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                            <Th onClick={() => handleSort('avgDeal')}>
                              <ThContent>
                                Avg Deal {sortConfig.key === 'avgDeal' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                            <Th onClick={() => handleSort('attainment')}>
                              <ThContent>
                                Attainment {sortConfig.key === 'attainment' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                            <Th onClick={() => handleSort('quota')}>
                              <ThContent>
                                Quota {sortConfig.key === 'quota' && (sortConfig.direction === 'ascending' ? <FaArrowUp /> : <FaArrowDown />)}
                              </ThContent>
                            </Th>
                </Tr>
              </Thead>
              <tbody>
                {sortedMetrics().map((metric) => (
                  <Tr key={metric.id}>
                    <StickyTd contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'year', e.target.textContent)} >{metric.year}</StickyTd>
                    <Td> <Logo src={lionseye} alt={"logo"}/> </Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'salesCycle', e.target.textContent)} >{metric.salesCycle}</Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'targetVerticals', e.target.textContent)}  >{metric.targetVerticals}</Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'buyerPersona', e.target.textContent)}  >{metric.buyerPersona}</Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'avgDeal', e.target.textContent)}  >{metric.avgDeal}</Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'attainment', e.target.textContent)} >{metric.attainment}</Td>
                    <Td contentEditable={isEditing} onBlur={(e) => handleChange(metric.id, 'quota', e.target.textContent)} >{metric.quota}</Td>
                  </Tr>
                ))}
              </tbody>
              <tfoot>
                      <Tr>
                        <StickyTd>Career Averages</StickyTd>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td></Td>
                        <Td>{getFormattedAverage('avgDeal')}</Td>
                        <Td>{calculateAverage('attainment')}%</Td>
                        <Td>{getFormattedAverage('quota')}</Td>
                      </Tr>
                      {editable && (
                        <Tr>
                          <Td colSpan="8">
                            {isEditing ? (
                              <>
                                <button onClick={handleSave}>Save</button>
                                <button onClick={handleCancel}>Cancel</button>
                              </>
                            ) : (
                              <OutlineButton onClick={handleEdit}>Edit</OutlineButton>
                            )}
                          </Td>
                        </Tr>
                      )}
                    </tfoot>
            </Table>
            </TableContainer>
    );
};

export default MetricsTable;