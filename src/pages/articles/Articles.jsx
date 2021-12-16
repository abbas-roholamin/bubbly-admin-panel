import React from "react";
import Row from "../../components/layout/Row";
import "./articles.css";
import Col from "./../../components/layout/Col";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Articles = () => {
  return (
    <Row>
      <Col>
        <div className="data_tabel card rounded shadow mb-5">
          <div className="card-header">article</div>
          <div className="card-body">
            <Table className="table table-striped table-hover">
              <Thead>
                <Tr>
                  <Th></Th>
                  <Th></Th>
                  <Th>title</Th>
                  <Th>author</Th>
                  <Th>category</Th>
                  <Th>date</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td>
                    <div>image</div>
                  </Td>
                  <Td>Tablescon</Td>
                  <Td>9 April 2019</Td>
                  <Td>East Annex</Td>
                  <Td>East Annex</Td>
                </Tr>
              </Tbody>
            </Table>
          </div>
        </div>
      </Col>
    </Row>
  );
};
export default Articles;
