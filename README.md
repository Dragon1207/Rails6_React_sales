# README


* Ruby version 2.6.3

* Rails 6.0.2.1

* Ecommerce site

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...


// v27
// app/views/shared/_header.html.erb
<nav class="navbar navbar-expand-lg navbar-light ">
  <%= link_to "O-Sale", "index.html", class: "navbar-brand goog" %>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <%= link_to "index.html", class: "nav-link" do %>
          Home <span class="sr-only">(current)</span>
        <% end %>
      </li>
      <li class="nav-item">
        <%= link_to "New Product", "new-item.html", class: "nav-link" %>
      </li>
      <li class="nav-item">
        <%= link_to "Sign In", "login.html", class: "nav-link" %>
      </li>
      <li class="nav-item">
        <%= link_to "Sign Up", "register.html", class: "nav-link" %>
      </li>
    </ul>
  </div>
</nav>
