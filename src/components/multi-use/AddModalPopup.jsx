import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "../../css/modalPopup.css"



function AddModalPopup({data}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="" className="Addbtn" onClick={handleShow}>
        +
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{data.type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {data && (
            <>
              {" "}
              {data.type === "product" ? (
                <form
                  role="form"
                  method="post"
                  action="product_transac.php?action=add"
                >
                  <input type="hidden" name="user" value="43" />
                  <div class="form-group">
                    <span>Product Name: </span>
                    <input
                      class="form-control"
                      placeholder="Product Name"
                      name="productname"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <span>Product Code: </span>
                    <input
                      class="form-control"
                      placeholder="Product Code"
                      name="productcode"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <span>Manufactured Date: </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Manufactured Date"
                      name="manufactureddate"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <span>Expiry Date: </span>
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Expiry Date"
                      name="expirydate"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <span>Price: </span>
                    <input
                      type="number"
                      min="1"
                      max="9999999999"
                      class="form-control"
                      placeholder="Price"
                      name="price"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <span>Stock Management: </span>
                    <select
                      class="form-control"
                      name="stockmanagement"
                      required=""
                    >
                      <option disabled="" selected="" hidden="">
                        Stock Management
                      </option>
                      <option value="Y">Enabled</option>
                      <option value="N">Disabled</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <span>Select Category: </span>
                    <select
                      id="CATEGORY"
                      name="CATEGORY"
                      class="form-control"
                      required=""
                    >
                      <option value="">Select</option>

                      <option value="1">Bread</option>

                      <option value="2">Cakes</option>

                      <option value="3">Bun</option>

                      <option value="4">Pastries</option>

                      <option value="5">Biscuits</option>

                      <option value="6">Cookies</option>

                      <option value="7">Doughnuts</option>

                      <option value="8">Crackers</option>
                    </select>{" "}
                  </div>
                  <div class="form-group">
                    <span>Select Unit: </span>
                    <select
                      id="UNIT"
                      name="UNIT"
                      class="form-control"
                      required=""
                    >
                      <option value="">Select</option>

                      <option value="1">KG</option>

                      <option value="2">PCS</option>

                      <option value="7">LTR</option>

                      <option value="12">PCKT</option>
                    </select>{" "}
                  </div>
                </form>
              ) : data.type === "retailer" ? (
                <div>Retailer!</div>
              ) : data.type === "manufacturers" ? (
                <form
                  role="form"
                  method="post"
                  action="manufacturer_transac.php?action=add"
                >
                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="First Name"
                      name="firstname"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Last Name"
                      name="lastname"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Email"
                      name="email"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="Phone Number"
                      name="phonenumber"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      class="form-control"
                      placeholder="User Name"
                      name="username"
                      required=""
                    />
                  </div>

                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Password"
                      name="password"
                      required=""
                    />
                  </div>
                </form>
              ) : data.type === "distributors" ? (
              <form role="form" method="post" action="manufacturer_transac.php?action=add">
              
                            <div class="form-group">
                              <input class="form-control" placeholder="First Name" name="firstname" required=""/>
                            </div>

                            <div class="form-group">
                              <input class="form-control" placeholder="Last Name" name="lastname" required=""/>
                            </div>

                            <div class="form-group">
                              <input class="form-control" placeholder="Email" name="email" required=""/>
                            </div>

                            <div class="form-group">
                              <input class="form-control" placeholder="Phone Number" name="phonenumber" required=""/>
                            </div>

                            <div class="form-group">
                              <input class="form-control" placeholder="User Name" name="username" required=""/>
                            </div>

                            <div class="form-group">
                              <input type="password" class="form-control" placeholder="Password" name="password" required=""/>
                            </div>      
          </form>
              ) : (
                <div>Other</div>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddModalPopup;
