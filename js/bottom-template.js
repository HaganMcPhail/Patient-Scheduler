 document.write('                           </div>
                        </div>
                    </div>
                </div><!-- main-content -->
            </div><!-- #content -->
            <div id="footer">
                <div class="container-fluid footer-inner">
                    <div class="row">
                        <div class="col-xs-12 text-center">
                            <div class="col-xs-4 text-center footer-border"><a href="#">Terms</a></div>
                            <div class="col-xs-4 text-center footer-border"><a href="#">About</a></div>
                            <div class="col-xs-4 text-center"><a href="#">Contact</a></div>
                            <div class="col-xs-12 text-center copyright">Copyright &copy; 2015 - All Rights Reserved</div>
                        </div>
                    </div>
                </div>
            </div><!-- #footer -->
        </div><!-- #wrapper -->
        <!-- script references -->
        <script src="js/jquery-1.11.2.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
        <script src="js/scripts.js"></script>
        <script type="text/javascript">
            $(document).ready(function(){
                $("input:radio[name="optradio"]").change(function(){
                    if($(this).is(":checked") && $(this).val() == "account"){
                        $("div.no-account").slideUp("slow", function(){
                            $("div.account").slideDown("slow");
                        });
                    } else {
                        $("div.account).slideUp("slow", function(){
                            $("div.no-account").slideDown("slow");
                        });
                    }
                });
            });
        </script>
    </body>
</html>')